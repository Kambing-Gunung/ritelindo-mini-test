import type { HTMLAttributes } from 'react';

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  title,
  description,
  titleClassName = '',
  descriptionClassName = '',
  className = '',
  ...props
}: SectionHeadingProps) {
  return (
    <div className={className} {...props}>
      <h2
        className={`text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}