function prueba() {
  const mobileOrPc = window.screen.width;
  return <div>{mobileOrPc < 700 ? "mobile" : "pc"}</div>;
}

export default prueba;
