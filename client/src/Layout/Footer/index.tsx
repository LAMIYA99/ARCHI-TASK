
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
    <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo & Subscribe */}
      <div>
        <h1 className="text-2xl font-bold">ARCHI</h1>
        <p className="mt-2 text-gray-600">Sign up today and get $20 off your first order.</p>
        <div className="mt-4 flex">
          <input
            type="email"
            placeholder="Enter your email..."
            className="border border-gray-300 rounded-l px-3 py-2 w-full"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r">→</button>
        </div>
        <div className="flex space-x-4 mt-4 text-gray-700">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>

      {/* Collections */}
      <div>
        <h3 className="font-semibold mb-4">Collection</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Jackets</li>
          <li>Men</li>
          <li>Pants</li>
          <li>T-shirts</li>
          <li>Women</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Shop</li>
          <li>Contact Us</li>
          <li>Coming Soon</li>
          <li>FAQ & Help</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold mb-4">Exclusive Services</h3>
        <ul className="space-y-2 text-gray-600">
          <li>📞 +1 666 8888</li>
          <li>✉ help@archi.com</li>
          <li>📍 2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-200 mt-6 py-4 text-gray-500 text-sm flex justify-between max-w-[1320px] mx-auto px-4">
      <span>© 2025 Archi. All Rights Reserved.</span>
      <div className="space-x-4">
        <span>Terms & Conditions</span>
        <span>Legal & Privacy</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer