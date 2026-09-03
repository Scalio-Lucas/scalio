import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Só monta os filhos quando a seção está perto de entrar na viewport.
 * Evita que seções abaixo da dobra (globo 3D, vídeos, etc.) consumam
 * tempo de main-thread durante o carregamento inicial da página.
 * Não altera o que é renderizado nem como — só o momento.
 *
 * Se `id` for passado, ele fica no wrapper (existe desde o início, mesmo
 * antes de montar) para que links de âncora (#faq, #contato, ...) sempre
 * encontrem o alvo e a seção monte imediatamente ao ser o destino do hash.
 */
export function LazyMount({
  children,
  rootMargin = "600px",
  id,
}: {
  children: ReactNode;
  rootMargin?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !!id && window.location.hash === `#${id}`,
  );

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  // Se o usuário clicar num link para essa âncora enquanto já está na página
  // (sem recarregar), garante que a seção monte na hora, mesmo que o
  // IntersectionObserver ainda não tenha disparado.
  useEffect(() => {
    if (!id || visible) return;
    const onHashChange = () => {
      if (window.location.hash === `#${id}`) setVisible(true);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [id, visible]);

  return (
    <div ref={ref} id={visible ? undefined : id}>
      {visible ? children : null}
    </div>
  );
}
