import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../../api/axios'

const initialState = {
    messages: []
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async({token,userId})=> {
    const {data} = await api.post('/api/messages/get', {to_user_id: userId}, {
        headers: {Authorization: `Bearer ${token}`}
    })
    return data.success ? data : null
})

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers:{

    }
})

export default messagesSlice.reducer