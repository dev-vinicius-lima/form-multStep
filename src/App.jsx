// components
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IoIosSend } from 'react-icons/io';
import { UserForm } from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';

// hooks
import { useForm } from './hooks/UseForm';
import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';

const formtemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
};
function App() {
  const [data, setData] = useState(formtemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const formComponents = [
    <UserForm key="1" data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm key="2" data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks key="3" data={data} />,
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form_Container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GoChevronLeft />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GoChevronRight />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Obrigado pelo Feedback ${data.name}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              >
                <span>Enviar</span>
                <IoIosSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
