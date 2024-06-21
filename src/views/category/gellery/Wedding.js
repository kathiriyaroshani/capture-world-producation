import { addphoto, viewphoto } from '../../Redux/categorySlice'
import { REACT_APP_PHOTO_URL } from '../../Services/key'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const  Wedding = () => {
  const { list, loading, message } = useSelector((state) => state.photo)
  const dispatch = useDispatch()
  useEffect(() => {
    if (list.length == 0) {
      dispatch(viewphoto(REACT_APP_PHOTO_URL))
    }
  }, [])

  const [obj, setObj] = useState({})
  const abc = (event) => {
    var target = event.target
    setObj({ ...obj, [target.name]: target.value })
  }

  const [visible, setVisible] = useState(false)

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    dispatch(
      // addCategory({ url: REACT_APP_CATEGORY_URL, formData, contentType: 'multipart/form-data' }),
      addphoto({ url: REACT_APP_PHOTO_URL, obj }),
    )
    setVisible(false)
    setObj({})
    setValidated(true)
  }

 return  (
  <>
   <input type="button" onClick={() => setVisible(!visible)} value="+" className="button" />
     <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add photo</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={12}>
                <CFormLabel htmlFor="validationCustom01">Category Name</CFormLabel>
                <CFormInput
                  onChange={abc}
                  defaultValue={obj.name || ''}
                  type="text"
                  id="validationCustom01"
                  required
                  name="name"
                />
                <CFormFeedback valid>good!</CFormFeedback>
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="validationCustom02">Image</CFormLabel>
                <CFormInput
                  onChange={abc}
                  type="text"
                  defaultValue={obj.image || ''}
                  id="validationCustom02"
                  name="image"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
            </CForm>
          </CModalBody>
        </CModal>
  <div className="site-section"  data-aos="fade">
      <div className="container-fluid">

        <div className="row justify-content-center">

          <div className="col-md-7">
            <div className="row mb-5">
              <div className="col-12 ">
                <h2 className="site-section-heading text-center">Wedding Gallery</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" >
            <a href="#"><img src={item.image} alt="IMage" className="img-fluid"/></a>
          </div>
        </div>
      </div>
    </div>
  </>
 )

}
export default  Wedding;