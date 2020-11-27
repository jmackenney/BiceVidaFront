import './insuranceDetail.scss'
import React from 'react'
import PropTypes from 'prop-types'

const InsuranceDetail = (data) => {
  const insurance = data.data

  return (
    <>
      {data.data && (
        <div
          className="insurance-detail__container"
          data-testid="insurance-detail__container"
        >
          <div className="insurance-detail__image">
            <img alt="" src={insurance.image} data-testid="image" />
            <div className="insurance-detail__label ml-3">
              <div className="ml-1 mr-1">$ {insurance.price}</div>
            </div>
          </div>
          <div className="m-3">
            <div className="insurance-detail__title" data-testid="title">
              {insurance.name}
            </div>
            <div className="insurance-detail__description">
              <p>{insurance.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

InsuranceDetail.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  }),
}

export default InsuranceDetail
