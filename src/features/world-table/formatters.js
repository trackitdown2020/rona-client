import objectPath from 'object-path';

export const percentageFormatter = (rowData, path) => {
    const value = objectPath.get(rowData, path);
    if(value) {
        const percentage = value.toFixed(2);
        return `${percentage}%`;
    } else {
        return 'N/A';
    }
   
}