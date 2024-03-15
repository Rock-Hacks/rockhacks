import 'tailwindcss/tailwind.css';
import {Button, Card} from '@geist-ui/core';
import {HeartFill, Github, Layers} from '@geist-ui/icons';
import logoUrl from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="bg-slate-900">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src={logoUrl} alt="Rock Hacks" className="h-8 w-8" />
          <span className="font-bold">Rock Hacks</span>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-white" href="#">
            Home
          </a>
          <a className="text-white" href="#">
            Team
          </a>
          <a className="text-white" href="#">
            FAQ
          </a>
          <a className="text-white" href="#">
            Location
          </a>
          <a
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sjalkote/rockhacks">
            <Github />
          </a>
          <Button
            auto={true}
            type="secondary"
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={() => {
              const sponsor = document.getElementById('sponsor');
              if (sponsor) {
                sponsor.scrollIntoView({behavior: 'smooth'});
              }
            }}
            icon={<HeartFill />}>
            Sponsor Us!
          </Button>
        </div>
      </nav>
      <header className="flex flex-col items-center justify-center py-24">
        <h1 className="text-6xl font-bold">Rock Hacks</h1>
        <p className="mt-4 text-xl text-center">
          Rock Hacks is a hackathon that blah blah blah yeah we're the best trust
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card className="w-full" type="dark">
          <Layers />
          <h3 className="mt-2 font-semibold">uhh</h3>
          <p className="mt-1 text-sm text-gray-600">I think we can put stuff in the cards.</p>
        </Card>
        <Card className="w-full" type="dark">
          <h3 className="mt-2 font-semibold">and uhh</h3>
          <p className="mt-1 text-sm text-gray-600">more stuff here</p>
        </Card>
      </section>
      <hr className="border-t border-gray-600 my-10" />
      <section className="p-4">
        <h2 className="text-2xl font-bold">Another section here</h2>
        <p className="mt-4 text-lg text-gray-400">
          yeah idk write something here I guess maybe photos or a description or some stuff from other hack club events
          or like a tour guide of our austin activities idk. random text to take up space to test the smooth scrolling
          random text to take up space to test the smooth scrolling random text to take up space to test the smooth
          scrolling random text to take up space to test the smooth scrolling yeah idk write something here I guess
          maybe photos or a description or some stuff from other hack club events or like a tour guide of our austin
          activities idk. random text to take up space to test the smooth scrolling random text to take up space to test
          the smooth scrolling random text to take up space to test the smooth scrolling random text to take up space to
          test the smooth scrolling
        </p>
      </section>
      <hr className="border-t border-gray-600 my-10" />
      <section className="p-4">
        <h2 className="text-2xl font-bold">Another section here</h2>
        <p className="mt-4 text-lg text-gray-400">
          yeah idk write something here I guess maybe photos or a description or some stuff from other hack club events
          or like a tour guide of our austin activities idk. random text to take up space to test the smooth scrolling
          random text to take up space to test the smooth scrolling random text to take up space to test the smooth
          scrolling random text to take up space to test the smooth scrolling yeah idk write something here I guess
          maybe photos or a description or some stuff from other hack club events or like a tour guide of our austin
          activities idk. random text to take up space to test the smooth scrolling random text to take up space to test
          the smooth scrolling random text to take up space to test the smooth scrolling random text to take up space to
          test the smooth scrolling
        </p>
      </section>
      <hr className="border-t border-gray-600 my-10" />
      <section className="p-4" id="sponsor">
        <h2 className="text-2xl font-bold">Sponsor Us</h2>
        <p className="mt-4 text-lg text-gray-400">pls we need moneys</p>
      </section>
      <hr className="border-t border-gray-600 my-10" />
      <section className="p-4" id="sponsor">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <p className="mt-4 text-lg text-gray-400">
          yeah we have a big button in the center here that says SIGN UP and it has confetti. yeah idk write something
          here I guess maybe photos or a description or some stuff from other hack club events or like a tour guide of
          our austin activities idk. random text to take up space to test the smooth scrolling random text to take up
          space to test the smooth scrolling random text to take up space to test the smooth scrolling random text to
          take up space to test the smooth scrolling yeah idk write something here I guess maybe photos or a description
          or some stuff from other hack club events or like a tour guide of our austin activities idk. random text to
          take up space to test the smooth scrolling random text to take up space to test the smooth scrolling random
          text to take up space to test the smooth scrolling random text to take up space to test the smooth scrolling
        </p>
      </section>
      <footer className="flex items-center justify-center p-4 bg-slate-800 rounded-md mt-5">
        <p className="text-gray-400">© 2021 Rock Hacks</p>
      </footer>
    </div>
  );
}

export default App;
