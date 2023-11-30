'use server'
import { makeData } from '../dashboard/make-data';

export async function myAction(prevState: any, formData: FormData) {
    console.log('prevState', prevState)
    console.log('formData', formData.values().next())
    const data = await makeData(1);
    // setData1(data);
    return {data};
  }