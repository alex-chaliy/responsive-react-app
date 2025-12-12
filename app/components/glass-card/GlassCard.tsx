import './glass-card.scss';
import cn from 'classnames';

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlassCard(props: GlassCardProps) {
  const { className, children } = { ...props };
  const classNames = cn('rra-glass-card', className);

  return (
    <div className={classNames}>
      <div className="rra-glass-card-children">{children}</div>
    </div>
  );
}
