import axios from 'axios'

export const fetchData = async (url:string, options: Record<string, unknown>) => {
     const res = await axios.get(url, {
          headers: { 'Authorization': 'Bearer' + process.env.NEXT_PUBLIC_TOKEN },
          ...options
     })
}