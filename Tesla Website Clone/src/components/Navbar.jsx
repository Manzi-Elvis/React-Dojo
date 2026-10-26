import logo from '../assets/logo.png';
import modelS from '../assets/modelS.png'
import model3 from '../assets/model3.png'
import modelY from '../assets/modelY.jpg'
import modelX from '../assets/modelX.png'
import cybertruck from '../assets/cybertruck.png'
import inventory from '../assets/inventory.jpg'
import supervised from '../assets/supervised.jpg'

import {CircleQuestionMark, Globe, CircleUserRound} from 'lucide-react';

export default function Navbar(){
      return(
       <nav className="relative h-14 flex items-center justify-between px-12 bg-white text-black">
            <img src={logo} alt="tesla logo" className="w-28 object-contain" />
            <ul className='flex items-center gap-3 font-semibold text-sm'>
                  <li className="relative group list-none">
                        <button className="px-4 py-2 rounded-md hover:bg-gray-100 font-semibold">Vehicles</button>
                        <div className='absolute -left-75 top-12 hidden group-hover:flex bg-white shadow-xl p-10 gap-16 rounded-xl z-50'>
                              <div className='grid grid-cols-3 gap-10'>
                                    <div className='text-center'>
                                          <img src={modelS} alt="model S" className='w-48' />
                                          <h2 className='font-bold text-xl mt-2'>Model S</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={modelY} alt="Model Y" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Model Y</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={modelX} alt="Model X" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Model X</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={cybertruck} alt="cybertruck" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Cybertruck</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={inventory} alt="Inventory" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Inventory</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={supervised} alt="Full Self-Driving" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Full Self-Driving</h2>
                                          <span>(Supervised)</span>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <img src={modelY} alt="Model Y" className='w-48' />
                                          <h2 className="font-bold text-xl mt-2">Model Y</h2>
                                          <div className="flex justify-center gap-4 mt-2 underline text-gray-600">
                                                <span>Learn</span>
                                                <span>Order</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="w-px bg-gray-300"></div>
                              <div className="flex flex-col gap-4 font-semibold">
                                    <p>Current Offers</p>
                                    <p>Demo Drive</p>
                                    <p>Trade-in</p>
                                    <p>Vehicle Safety Report</p>
                                    <p>Pre-Owned</p>
                                    <p>Trip Planner</p>
                                    <p>Features</p>
                                    <p>Help Me Choose</p>
                                    <p>Campare</p>
                                    <p>Safety</p>
                                    <p>Fleet</p>
                                    <p>Semi</p>
                                    <p>Roadster</p>
                                    <p>Robotaxi</p>
                              </div>
                        </div>
                  </li>
                  <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Energy</li>
                  <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Charging</li>
                  <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Discover</li>
                  <li className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Shop</li>
            </ul>
            <div className='flex items-center gap-4'>
                  <CircleQuestionMark size={20} className='cursor-pointer' />
                  <Globe size={20} className='cursor-pointer' />
                  <CircleUserRound size={20} className='cursor-pointer' />
            </div>
      </nav>
      )
}