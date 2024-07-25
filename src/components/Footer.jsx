export default function Footer() {
  const date = new Date().getFullYear('YYYY');
  return (
    <footer>
      <small>&copy; {date}. Copyright by IK.</small>
      <p>
        Version <b>1.17</b>
      </p>
    </footer>
  );
}
