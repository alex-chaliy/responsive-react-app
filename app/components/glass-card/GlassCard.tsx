import './glass-card.scss';
import cn from 'classnames';

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
  useDecoration?: boolean;
}

export default function GlassCard(props: GlassCardProps) {
  const { className, children, useDecoration = true } = { ...props };
  const classNames = cn('rra-glass-card', className);

  return (
    <div className={classNames}>
      {useDecoration && (
        <img className="rra-glass-card-bg-decoration" alt="" src="/bg/stripes-for-theme-light.png" />
      )}
      {useDecoration && (
        <img className="rra-glass-card-bg-decoration-dark" alt="" src="/bg/stripes-for-theme-dark.png" />
      )}
      <div className="rra-glass-card-children">{children}</div>
    </div>
  );
}
