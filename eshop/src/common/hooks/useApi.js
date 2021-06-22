import axios from "axios";
import { useState } from "react";

const initialState = {
  isLoading: false,
  date: null
}

function useApi() {
  const [state, setState] = useState(initialState);

  async function call(request) {
    setState({ data: null, isLoading: true });
    const { data } = await axios(request);
    setState({ data, isLoading: false });
  }

  return {
    ...state,
    call
  }
}

export default useApi;