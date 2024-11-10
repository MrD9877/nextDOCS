import GalleryCard from '@/components/GalleryCard';
import { api } from '@/components/Photoapi';
import { Suspense } from 'react';


export default function Gallery() {
    return (
        <div>
            {/* <Suspense fallback={<p>loading..</p>}> */}
            <GalleryCard api={api} />
            {/* </Suspense> */}
        </div>
    )
}
