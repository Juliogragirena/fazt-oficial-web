import Button from '@Atoms/Button';
import UserImage from '@Atoms/UserImage';

export default function Home() {
  return (
    <>
      <Button text="Hola Mundo" variant="fill" color="secondary" />
      <Button text="Hola Mundo" variant="outline" color="primary" />
      <Button text="Hola Mundo" variant="outline" color="secondary" />
      <Button text="Hola Mundo" variant="fill" color="primary" />
      <Button text="Hola Mundo" variant="fill" color="secondary" size="lg" />
      <Button text="Hola Mundo" variant="fill" color="secondary" size="xsm" />
      <Button text="Hola Mundo" variant="outline" color="secondary" size="rl" />
      <Button text="Hola Mundo" variant="fill" color="primary" size="sm" />
      <Button text="Hola Mundo" variant="outline" color="primary" size="xsm" />

      <UserImage size="md" url="https://unsplash.com/photos/64YrPKiguAE" />
    </>
  );
}
