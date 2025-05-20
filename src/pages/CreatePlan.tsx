import { useState, useRef } from 'react';

const CreatePlan = () => {
    const [image, setImage] = useState<File | null>(null);
    const fileInputref = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        fileInputref.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    return (
        // Main Container
        <div className="flex items-center justify-center min-h-screen p-8 bg-background"> */}
            {/* Image Rectangle */}
            <div className=''>
            </div>
        </div>
    );
}

export default CreatePlan;