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
import { addphoto, viewphoto } from '../../Redux/categorySlice'
import { REACT_APP_PHOTO_URL } from '../../Services/key'
import { useDispatch, useSelector } from 'react-redux'

const Photo = () => {
  const{list, loading } = useSelector((state) => state.Photo);
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

  // const setImage = (event) => {
  //   setObj({ ...obj, image: event.target.files[0] })
  // }

  return (
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
          {/* <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter> */}
        </CModal>
    <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="row">
        <div class="col-lg-4">

          <div class="image-wrap-2">
            <div class="image-info">
              <h2 class="mb-3">{item.name}</h2>
              <a href="../Wedding.js" class="btn btn-outline-white py-2 px-4">more photo</a>
            </div>
            <img src={item.image} alt="Image" class="img-fluid"/>
          </div>

        </div> 

      </div>
    </div>
    <CTableBody>
                  {loading ? (
                    <>Loading...</>
                  ) : list.length > 0 ? (
                    list.map((item, i) => (
                      <CTableRow>
                        <CTableDataCell>
                          <input type="checkbox" />
                        </CTableDataCell>
                        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                        <CTableDataCell>
                          <img className="img" src={item.image} alt="CAPTURE WORLD PRODUCTION" />
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
    </>
  )
}




// const Photo = () => {
//   const { list, loading } = useSelector((state) => state.Photo);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (list.length === 0) {
//       dispatch(viewphoto(process.env.REACT_APP_PHOTO_URL));
//     }
//   }, [dispatch, list.length]);

//   const [obj, setObj] = useState({});
//   const abc = (event) => {
//     const { name, value } = event.target;
//     setObj((prevObj) => ({ ...prevObj, [name]: value }));
//   };

//   const [visible, setVisible] = useState(false);
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();
//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       dispatch(addphoto({ url: process.env.REACT_APP_PHOTO_URL, obj }));
//       setVisible(false);
//       setObj({});
//       setValidated(true);
//     }
//   };

//   return (
//     <>
//       <input type="button" onClick={() => setVisible(!visible)} value="+" className="button" />
//       <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>Add photo</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CForm
//             className="row g-3 needs-validation"
//             noValidate
//             validated={validated}
//             onSubmit={handleSubmit}
//           >
//             <CCol md={12}>
//               <CFormLabel htmlFor="validationCustom01">Category Name</CFormLabel>
//               <CFormInput
//                 onChange={abc}
//                 value={obj.name || ''}
//                 type="text"
//                 id="validationCustom01"
//                 required
//                 name="name"
//               />
//               <CFormFeedback valid>good!</CFormFeedback>
//             </CCol>
//             <CCol md={12}>
//               <CFormLabel htmlFor="validationCustom02">Image</CFormLabel>
//               <CFormInput
//                 onChange={abc}
//                 type="text"
//                 value={obj.image || ''}
//                 id="validationCustom02"
//                 name="image"
//                 required
//               />
//               <CFormFeedback valid>Looks good!</CFormFeedback>
//             </CCol>
//             <CCol xs={12}>
//               <CButton color="primary" type="submit">
//                 Submit
//               </CButton>
//             </CCol>
//           </CForm>
//         </CModalBody>
//       </CModal>
//       <div className="container-fluid" data-aos="fade" data-aos-delay="500">
//         <div className="row">
//           {list.map((item, i) => (
//             <div className="col-lg-4" key={i}>
//               <div className="image-wrap-2">
//                 <div className="image-info">
//                   <h2 className="mb-3">{item.name}</h2>
//                   <a href="../Wedding.js" className="btn btn-outline-white py-2 px-4">more photo</a>
//                 </div>
//                 <img src={item.image} alt="Image" className="img-fluid" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <CTableBody>
//         {loading ? (
//           <>Loading...</>
//         ) : list.length > 0 ? (
//           list.map((item, i) => (
//             <CTableRow key={i}>
//               <CTableDataCell>
//                 <input type="checkbox" />
//               </CTableDataCell>
//               <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
//               <CTableDataCell>
//                 <img className="img" src={item.image} alt="CAPTURE WORLD PRODUCTION" />
//               </CTableDataCell>
//               <CTableDataCell>{item.name}</CTableDataCell>
//             </CTableRow>
//           ))
//         ) : (
//           <CTableRow>
//             <CTableDataCell colSpan={4}>No Records Found..</CTableDataCell>
//           </CTableRow>
//         )}
//       </CTableBody>
//     </>
//   );
// };

export default Photo;


