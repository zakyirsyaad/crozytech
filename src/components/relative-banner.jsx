import React from 'react';

const RelativeBanner = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-screen h-48 bg-blue-500 z-10">
                Div Pertama
            </div>
            <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%] z-20 flex gap-20">
                <div className='w-48 h-48 bg-slate-500'>kesatu</div>
                <div className='w-48 h-48 bg-slate-500'>kedua</div>
                <div className='w-48 h-48 bg-slate-500'>ketiga</div>

            </div>
        </div>
    );
};

export default OverlappingDivs;
