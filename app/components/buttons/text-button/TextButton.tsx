import './text-button.scss';

export default function TextButton(props: any) {
  const { title = 'Click Me!' } = { ...props };
  return (
    <button className="text-button">
      <span className="more-pseudo"></span>
      <span className="text-button-title">{title}</span>
    </button>
  );
}
