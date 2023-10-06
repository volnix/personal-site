import { lazy, Suspense } from "react";
import './App.scss';
import runIcon from '@iconify-icons/bx/run';
import vinylIcon from '@iconify-icons/tabler/vinyl';
import { Icon } from "@iconify/react";

const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));

export default function App() {
  return (
    <>
      <a href="https://running.nickvolgas.com" style={{ position: 'absolute', top: 10, right: 250, border: 0 }}>
        <Icon icon={runIcon} style={{ fontSize: "300%", margin: "9% 5% 0 5%", color: "rgba(0, 0, 0, .5)" }}/>
      </a>
      <a href="https://records.nickvolgas.com"  style={{ position: 'absolute', top: 10, right: 195, border: 0 }}>
        <Icon icon={vinylIcon} style={{ fontSize: "300%", margin: "9% 5% 0 5%", color: "rgba(0, 0, 0, .5)" }}/>
      </a>
      <Suspense fallback={<>Loading...</>}><Header/></Suspense>
      <Suspense fallback={<>Loading...</>}><About/></Suspense>
      <Suspense fallback={<>Loading...</>}><Skills/></Suspense>
      <Suspense fallback={<>Loading...</>}><Resume/></Suspense>
    </>
  );
}
