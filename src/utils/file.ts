export const getFileExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    return lastDotIndex !== -1 ? fileName.slice(lastDotIndex + 1) : "";
}

export const getFileName = (uri: string) => {
    return uri.substring(uri.lastIndexOf('/') + 1);
}
