const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Humsafari. All rights reserved.
          </p>
          <p className="text-sm">
            Made with ❤️ by Shaman Shetty
            <br />
            <a href="https://github.com/shamanshetty" className="underline" target="_blank">Github</a>
            <br />
            <br />
          </p>
        </div>
      </footer>
    );
  };


  export default Footer;
