import Link from 'next/link'
import { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import RepoDir from '@/app/components/RepoDir'
//to get the dyanamic data
const RepoPage = ({params}) => {
  return (
    <div className='card'>
    <Link href="/code/repos" className='btn btn-back'>Back to Repositories</Link>
    {/* //suspense will take care of what to show until data loads */}
    <Suspense fallback={<h2 style={{color:'blue'}}>Loading...</h2>}>  <Repo name={params.name}/></Suspense>
  
    <Suspense fallback={<h2  style={{color:'blue'}}>Loading...</h2>}>  <RepoDir name={params.name}/></Suspense>
    </div>
  )
}

export default RepoPage