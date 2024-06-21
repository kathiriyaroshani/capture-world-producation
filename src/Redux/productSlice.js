import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addData, deleteData, fetchData, updateData } from '../Services/axiosService'

export const viewvdieo = createAsyncThunk('vdieo/viewvdieo', async (url) => {
  try {
    const result = await fetchData(url)
    return result.data
  } catch (err) {
    return err
  }
})

export const addvdieo = createAsyncThunk('vdieo/addvdieo', async ({ url, obj }) => {
  try {
    const result = await addData(url, obj)
    return result.data
  } catch (err) {
    return err
  }
})

export const removevdieo = createAsyncThunk('vdieo/removevdieo', async ({ url, id }) => {
  try {
    await deleteData(`${url}/${id}`)
    return id
  } catch (err) {
    return err
  }
})

export const updatevdieo = createAsyncThunk('vdieo/updatevdieo', async ({ url, obj }) => {
  try {
    await updateData(`${url}/${obj.id}`, obj)
    return obj
  } catch (err) {
    return err
  }
})

const productSlice = createSlice({
  name: 'vdieo',
  initialState: {
    productlist: [],
    ploading: false,
    pmessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewvdieo.pending, (state, action) => {
      return { ...state, ploading: true }
    })
    builder.addCase(viewvdieo.fulfilled, (state, action) => {
      return { ...state, ploading: false, productlist: action.payload }
    })
    builder.addCase(viewvdieo.rejected, (state, action) => {
      return { ...state, ploading: false, pmessage: 'something wrong..' }
    })
    // builder.addCase(viewvdieo.fulfilled, (state, action) => {
    //   return { ...state, ploading: false, productlist: [...state.productlist, action.payload] }
    // })
    builder.addCase(addvdieo.pending, (state, action) => {
      return { ...state, ploading: true }
    })
    builder.addCase(removevdieo.fulfilled, (state, action) => {
      return { ...state, productlist: state.productlist.filter((res) => action.payload != res.id) }
    })
    builder.addCase(updatevdieo.fulfilled, (state, action) => {
      alert(action.payload.id)
      return {
        ...state,
        productlist: state.productlist.map((res) =>
          res.id === action.payload.id ? { ...res, ...action.payload } : res,
        ),
      }
    })
  },
})

export default productSlice.reducer
