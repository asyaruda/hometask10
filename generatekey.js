function generateKey(length, characters) {
    let arbitraryKey = ''
    const charactersLength = characters.length
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength)
      arbitraryKey += characters.charAt(randomIndex)
    }
    return arbitraryKey
  }
  
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const arbitraryKey = generateKey(16, characters)
  console.log(arbitraryKey)