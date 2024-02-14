

export function Footer() {
      return (
        <footer className=" bg-secondary-darker text-white p-4 shadow-2xl">
          <div className="container mx-auto">
            <div className="flex justify-start items-center">
              <div>
                <h3 className="text-lg font-bold">Contact Us</h3>
                <p className="text-sm">Email: shopping@gmail.com</p>
                <p className="text-sm">Phone: +1234567890</p>
              </div>
            </div>
            <div className=" text-sm text-center">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </div>
        </footer>
      );
    }
    