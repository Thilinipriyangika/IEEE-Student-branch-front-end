'use client'
import CommonButton from '@/components/common/commonButton/commonButton'
import AuthLayout from '@/components/layouts/authLayout/authLayout'
import Link from 'next/link'
import React from 'react'
import back from '../.../../../../../public/icons/back.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  function changePassword() {
    router.push('/dashboard')
  }
  return (
    <AuthLayout type={'CHANGE'}>
      <div className='d-flex w-100 justify-content-between align-items-start'>
        <div className='d-flex flex-column '>
          <div className=''>
            <Link href={`/forgot-password/verify-code`} className="nav-link d-flex align-items-center text-center justify-content-center "><div><Image src={back} className='img-fluid' style={{ width: 22 }} /></div><div className='h6 m-0'>Back</div></Link>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className='h5 fw-bold'>Set a password</div>
        <div className='h6 text-secondary'>Your previous password has been reset. Please set a new password for your account.</div>
      </div>
      <div className='mt-5'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your new password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="enter password" />
        </div>
      </div>

      <div className='mt-4'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Confirm your password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="confirm your password" />
        </div>
      </div>
   
      <div className='mt-5 w-100 mb-3'>
        <CommonButton text={"Change password"} onClick={() => changePassword()} />
      </div>
    </AuthLayout>

  )
}

export default page
