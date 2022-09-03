
import WizardForm from 'react-wizard-form';
import StepOneForm from '../components/step-one';
import StepTwoForm from '../components/step-two';
import StepThreeForm from '../components/step-three';

export default function multiForm() {
    return (
        <div className='d-flex align-items-center justify-content-center h-full'>
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>Multi Form</div>
                    <div className='card-body'>
                    <WizardForm
                    >
                        <StepOneForm></StepOneForm>
                        <StepTwoForm></StepTwoForm>
                        <StepThreeForm></StepThreeForm>
                    </WizardForm>
                    </div>
                </div>
            </div>
        </div>
    )
}