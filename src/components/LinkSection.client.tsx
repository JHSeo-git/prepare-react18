import NextLink from 'next/link';

export type LinkSectionProps = {
  href: string;
  title: string;
  description?: string;
  odd?: boolean;
  disabled?: boolean;
} & React.ComponentProps<'a'>;

function LinkSection({
  href,
  title,
  description,
  odd,
  disabled,
  ...props
}: LinkSectionProps) {
  return (
    <section className={`p-10 ${odd ? 'bg-slate-100' : ''}`}>
      <div className="max-w-5xl mx-auto my-0">
        <h2 className="text-2xl font-bold text-slate-700 hover:text-slate-800 active:text-slate-900">
          <NextLink href={href} passHref>
            <a
              className={disabled ? 'pointer-events-none text-slate-500' : ''}
              {...props}
            >
              {title}
            </a>
          </NextLink>
          {description && (
            <p className={`text-sm ${disabled ? 'text-slate-400' : ''}`}>
              <em>{description}</em>
            </p>
          )}
        </h2>
      </div>
    </section>
  );
}

export default LinkSection;
