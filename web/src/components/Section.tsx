import React from "react";

export default function Section({ id, title, description, children }: {
  id?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        )}
        {description && (
          <p className="text-white/80 mb-8 max-w-2xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
