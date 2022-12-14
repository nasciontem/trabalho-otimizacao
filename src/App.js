import { useState } from 'react';
import './App.css';
import TimeConstraintParameters from './classes/TimeConstraintParameters/TimeConstraintParameters';
import CostConstraintParameters from './classes/CostConstraintParameters/CostConstraintParameters';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';
import OptimizationConditions from './components/OptimizationConditions/OptimizationConditions';
import Solver from './components/Solver/Solver';
import { OptimizationRequestContext } from './components/OptimizationRequestContext/OptimizationRequestContext';
import Solution from './components/Solution/Solution';

function App() {
  const [disciplines, setDisciplines] = useState([]);
  const [timeConstraints, setTimeConstraints] = useState(new TimeConstraintParameters());
  const [costConstraints, setCostConstraints] = useState(new CostConstraintParameters());
  const [solution, setSolution] = useState({});

  return (
    <div className="App">
      <OptimizationRequestContext>
        <section className='to-body'>
          <DisciplineRegister disciplines={disciplines} setDisciplines={setDisciplines} />
          <OptimizationConditions
            disciplines={disciplines}
            timeConstraints={timeConstraints}
            setTimeConstraints={setTimeConstraints}
            costConstraints={costConstraints}
            setCostConstraints={setCostConstraints} />
          <Solution disciplines={disciplines} solution={solution} />
        </section>
        <Solver setSolution={setSolution} />
      </OptimizationRequestContext>
    </div>
  );
}

export default App;
