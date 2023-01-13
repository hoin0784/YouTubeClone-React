import React from 'react';
import { ImMusic } from 'react-icons/im';
import { BsCameraReelsFill, BsTrophyFill } from 'react-icons/bs'
import { Link} from 'react-router-dom';
import { AiTwotoneFire } from 'react-icons/ai'
import { FaGamepad, FaRegNewspaper, FaWifi } from 'react-icons/fa'

export default function SearchButton() {
  return (
    <div>
      <ul className='flex justify-evenly font-semibold text-2xl cursor-pointer m-4 '>
        <li>
          <Link to = '/'>
            <AiTwotoneFire className='m-auto' />
            <h1>popularity</h1>
          </Link>
        </li>
        <li>
          <Link to='Videos/Music'>
              <ImMusic className='m-auto' />
              <h1>Music</h1>
          </Link>
        </li>

        <li  >
          <Link to ='Videos/Live'>
            <FaWifi className='m-auto' />
            <h1>Live</h1>
          </Link>
        </li>

        <li>
          <Link to='Videos/games'>
            <FaGamepad className='m-auto' />
            <h1>Game</h1>
          </Link>
        </li>

        <li>
          <Link to='Videos/News'>
            <FaRegNewspaper className='m-auto' />
            <h1>News</h1>
          </Link>
        </li>

        <li>
          <Link to = 'Videos/Movies'>
            <BsCameraReelsFill className='m-auto' />
            <h1>Movie</h1>
          </Link>
        </li>

        <li>
          <Link to ='videos/Sports'>
            <BsTrophyFill className='m-auto' />
            <h1>Sports</h1>
          </Link>
        </li>

      </ul>
    </div>
  );
}

