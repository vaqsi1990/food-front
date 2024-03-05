export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'food-server-teal.vercel.app/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}