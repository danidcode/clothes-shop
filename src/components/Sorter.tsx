import React, { useState } from 'react'
import { BsSortDown, BsSortUp } from 'react-icons/bs'
import { SortOrder } from 'types/sort-order'
import IconButton from './IconButton'

type Props = {
    onChange: (order: SortOrder) => void
}
const Sorter = ({ onChange }: Props) => {

    const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder | null>(null)

    const handleChange = (order: SortOrder) => {
        setSelectedSortOrder(selectedSortOrder === order ? null : order)
        onChange(selectedSortOrder === order ? null : order)
    }
    return (
        <div className='flex gap-2'>
            <IconButton icon={<BsSortDown size={20} />} onClick={() => handleChange('asc')} additionalClasses={selectedSortOrder === 'asc' && 'bg-gray-200'} />
            <IconButton icon={<BsSortUp size={20} />} onClick={() => handleChange('desc')} additionalClasses={selectedSortOrder === 'desc' && 'bg-gray-200'} />
        </div>
    )
}

export default Sorter