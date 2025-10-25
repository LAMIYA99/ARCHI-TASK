const Loading = () => {
  window.onload = function () {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 2000);
    }
  };
  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-white  flex items-center justify-center z-999999"
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://i.pinimg.com/originals/bf/d6/2c/bfd62c044e36f2a2a28567b8f236d647.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loading;
