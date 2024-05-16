import Image from 'next/image';
import prime from '../../../public/images/prime.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4 w-full flex justify-center">
          <Image
            src={prime}
            alt="Prime Video"
            width={120}
            height={40}
          />
        </div>
        <ul className="flex justify-center space-x-6 text-sm text-gray-400">
          <li><a href="#" className="hover:text-gray-200">Terms and Privacy Notice</a></li>
          <li><a href="#" className="hover:text-gray-200">Send us feedback</a></li>
          <li><a href="#" className="hover:text-gray-200">Help</a></li>
        </ul>
        <div className="mt-4 text-gray-500 text-xs">
          &copy; 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
