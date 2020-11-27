import './insuranceSelector.scss'
import React, { useState } from 'react'
import Button from '../commons/button/button'
import Select from '../commons/select/select'
import InsuranceDetail from '../insuranceDetail/insuranceDetail'
import { getInsuranceDetails } from '../../data/insuranceData'
import Swal from 'sweetalert2'

const InsuranceSelector = () => {
  const [insurances] = useState([
    { name: 'Seguro Vida Activa', id: 58 },
    { name: 'Seguro Viaje Protegido', id: 59 },
  ])
  const [selectedInsurance, setSelectedInsurance] = useState()
  const [currentInsurance, setCurrentInsurance] = useState(null)

  const onClickInsuranceDetails = async () => {
    let res
    if (selectedInsurance) {
      res = await getInsuranceDetails(selectedInsurance.id)

      try {
        setCurrentInsurance(res.insurance)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:
            'Ocurrió un error al consultar la información :( Intente más tarde.',
        })
      }
    } else {
      Swal.fire('Debes seleccionar un Plan')
    }
  }
  return (
    <div className="container">
      <div className="plan-selector__container" data-testid="container">
        <div className="plan-selector__selector row">
          <Select
            className="bice-vida__select noMobile-mr"
            options={insurances}
            label="Planes"
            setValue={setSelectedInsurance}
          />
          <Button
            className="bice-vida__button noDesktop-mt"
            onClick={onClickInsuranceDetails}
          >
            Consultar
          </Button>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          {currentInsurance && <InsuranceDetail data={currentInsurance} />}
        </div>
      </div>
    </div>
  )
}

export default InsuranceSelector
