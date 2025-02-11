import React, { useState, useEffect } from 'react';

const useAudioPlayer = () => {
  const [audioInstance, setAudioInstance] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const playAudio = (audio, index) => {
   try {
    const isObject = typeof(audio) === 'object'
    const isAudio = isObject ? audio[index] : audio;
    const viewElement = document.querySelector('.in-audio .wrapper-button-ayat');
    
    isObject && viewElement ? viewElement.scrollIntoView({ behavior: 'smooth' }) : null;
    
    if (!viewElement) {
     console.log('element viewElement tidak terlihat')
    }
    
    if (audioInstance) {
     audioInstance.pause();
     audioInstance.currentTime = 0;
    }
    
    const player = new Audio(isAudio);
    setAudioInstance(player);
    setCurrentIndex(index)
    player.play();
    
    player.onended = () => {
     if (index < audio.length - 1 && typeof(audio) === 'object') {
      playAudio(audio, index + 1)
     } else {
      setCurrentIndex(0)
     }
    } 
   } catch (err) {
    console.log(err, 'gagal memutar audio')
   }
  }
  
  const stopAudio = () => {
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }
  };
  
  return {
    playAudio,
    stopAudio,
    currentIndex,
  };
}
 
export default useAudioPlayer;