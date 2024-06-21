import React from 'react'
import 'quill/dist/quill.snow.css'
// import ReactQuill from 'react-quill'
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
  CFormTextarea,
  CFormSelect,
} from '@coreui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addvdieo, viewvdieo } from '../../Redux/productSlice'
import { REACT_APP_PHOTO_URL, REACT_APP_VIDEO_URL } from '../../Services/key'
import { viewphoto } from '../../Redux/categorySlice'

const Vdieo = () => {
  // var modules = {
  //   toolbar: [
  //     [{ size: ['small', false, 'large', 'huge'] }],
  //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //     [{ list: 'ordered' }, { list: 'bullet' }],
  //     ['link', 'image'],
  //     [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
  //     [
  //       {
  //         color: [
  //           '#000000',
  //           '#e60000',
  //           '#ff9900',
  //           '#ffff00',
  //           '#008a00',
  //           '#0066cc',
  //           '#9933ff',
  //           '#ffffff',
  //           '#facccc',
  //           '#ffebcc',
  //           '#ffffcc',
  //           '#cce8cc',
  //           '#cce0f5',
  //           '#ebd6ff',
  //           '#bbbbbb',
  //           '#f06666',
  //           '#ffc266',
  //           '#ffff66',
  //           '#66b966',
  //           '#66a3e0',
  //           '#c285ff',
  //           '#888888',
  //           '#a10000',
  //           '#b26b00',
  //           '#b2b200',
  //           '#006100',
  //           '#0047b2',
  //           '#6b24b2',
  //           '#444444',
  //           '#5c0000',
  //           '#663d00',
  //           '#666600',
  //           '#003700',
  //           '#002966',
  //           '#3d1466',
  //           'custom-color',
  //         ],
  //       },
  //     ],
  //   ],
  // }

  // var formats = [
  //   'header',
  //   'height',
  //   'bold',
  //   'italic',
  //   'underline',
  //   'strike',
  //   'blockquote',
  //   'list',
  //   'color',
  //   'bullet',
  //   'indent',
  //   'link',
  //   'image',
  //   'align',
  //   'size',
  // ]

  const handleProcedureContentChange = (content) => {
    setObj({ ...obj, longdescription: content })
  }

  const { productlist, ploading, pmessage } = useSelector((state) => state.Vdieo)
  const {list, loading, message } = useSelector((state) => state.vdieo)

  const dispatch = useDispatch()
  useEffect(() => {
    if (productlist.length == 0) {
      dispatch(viewvdieo(REACT_APP_VIDEO_URL))
    }
    if (list.length == 0) {
      dispatch(viewphoto(REACT_APP_PHOTO_URL))
    }
  }, [])

  const [obj, setObj] = useState({ imageData: [] })
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

    dispatch(viewvdieo({ url: REACT_APP_VIDEO_URL, obj }))
    setVisible(false)
    setObj({ vdieoData: [] })
    setValidated(true)
  }

  const addTableRows = () => {
    const rowsInput = {}
    setObj({ ...obj, vdieoData: [...obj.vdieoData, rowsInput] })
  }
  const deleteTableRows = (index) => {
    const rows = [...obj.vdieoData]
    rows.splice(index, 1)
    setObj({ ...obj, vdieoData: rows })
  }

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target
    const rowsInput = [...obj.vdieoData]
    rowsInput[index][name] = value
    setObj({ ...obj, vdieoData: rowsInput })
  }

  return (
    <CRow>
      <input type="button" onClick={() => setVisible(!visible)} value="+" className="button" />
      <CModal size="xl" backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add Product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={6}>
              <CFormLabel htmlFor="validationCustom011">Category</CFormLabel>
              <CFormSelect
                onChange={abc}
                defaultValue={obj.category_id || ''}
                name="category_id"
                id="validationCustom011"
                required
              >
                <option> Select Category </option>
                {list.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </CFormSelect>
              <CFormFeedback valid>good!</CFormFeedback>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="validationCustom01">Product Name</CFormLabel>
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
              <CFormLabel htmlFor="validationCustom02">vdieo</CFormLabel>
              <button type="button" className="btn btn-outline-success" onClick={addTableRows}>
                +
              </button>
              {obj.vdieoData &&
                obj.vdieoData.map((data, index) => {
                  const { vdieo } = data
                  return (
                    <div key={index} style={{ display: 'flex', margin: '5px' }}>
                      <input
                        type="text"
                        placeholder="Enter Image Path.."
                        value={vdieo}
                        onChange={(evnt) => handleChange(index, evnt)}
                        name="image"
                        className="form-control"
                      />
                   
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => deleteTableRows(index)}
                      >
                        x
                      </button>
                    </div>
                  )
                })}
            </CCol>
            <CCol xs={12}>
              <CButton color="primary" type="submit">
                Submit
              </CButton>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Product Lists</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
              <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="row">
        <div class="col-lg-4">

          <div class="image-wrap-2">
            <div class="image-info">
              <h2 class="mb-3">{item.name}</h2>
              <a href="../Wedding.js" class="btn btn-outline-white py-2 px-4">more vdieo</a>
            </div>
            <img src={item.vdieo} alt="Image" class="img-fluid"/>
          </div>

        </div> 

      </div>
    </div>
              </CTableHead>
              <CTableBody>
                {ploading ? (
                  <>Loading...</>
                ) : productlist.length > 0 ? (
                  productlist.map((item, i) => (
                    <CTableRow>
                      <CTableDataCell>
                        <input type="checkbox" />
                      </CTableDataCell>
                      <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.category_id}</CTableDataCell>
                      <CTableDataCell>
                        <img className="img" src={item.vdieoData[0].vdieo} alt="HN Techno" />
                      </CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      
                      
                   
                    </CTableRow>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2}>No Records Found..</td>
                  </tr>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Vdieo
