import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addData, deleteData, fetchData, updateData } from '../Services/axiosService'

export const viewphoto = createAsyncThunk('photo/viewphoto', async (url) => {
  try {
    const result = await fetchData(url)
    return result.data
  } catch (err){
    return er
  }
})

export const addphoto = createAsyncThunk('photo/addphoto', async ({ url, obj }) => {
  try {
    const result = await addData(url, obj)
    return result.data
  } catch (err) {
    return err
  }
})

export const removephoto = createAsyncThunk('photo/removephoto', async ({ url, id }) => {
  try {
    await deleteData(`${url}/${id}`)
    return id
  } catch (err) {
    return err
  }
})

export const updatephoto = createAsyncThunk('photo/updatephoto', async ({ url, obj }) => {
  try {
    await updateData(`${url}/${obj.id}`, obj)
    return obj
  } catch (err) {
    return err
  }
})

const CategorySlice = createSlice({
  name: 'photo',
  initialState: {
    list: [],
    loading: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewphoto.pending, (state, action) => {
      return { ...state, loading: true }
    })
    builder.addCase(viewphoto.fulfilled, (state, action) => {
      return { ...state, loading: false, list: action.payload }
    })
    builder.addCase(viewphoto.rejected,(state, action) => {
      return { ...state,loading: false, message: 'something wrong..' }
    })
    // builder.addCase(viewphoto.fulfilled,(state, action) => {
    //   return { ...state, loading: false, list: [...state.list, action.payload] }
    // })
    builder.addCase(addphoto.pending, (state, action) => {
      return { ...state, loading: true }
    })
    builder.addCase(removephoto.fulfilled, (state, action) => {
      return { ...state, list: state.list.filter((res) => action.payload != res.id) }
    })
    builder.addCase(updatephoto.fulfilled, (state, action) => {
      alert(action.payload.id)
      return {
        ...state,
        list: state.list.map((res) =>
          res.id === action.payload.id ? { ...res, ...action.payload } : res,
        ),
      }
    })
  },
})

export default CategorySlice.reducer
