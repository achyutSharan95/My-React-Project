import { useState } from 'react'
import SearchInput from '../../common/component/SearchInput'

const Chat = () => {
  const [value, setValue] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', value);
    setValue('');
  }
  return (
    <div id="chat-section" className='flex flex-col items-center justify-center h-dvh'>
      <div className='w-full max-w-[616px] '>
        <h3 className="text-[#6B6255] text-center oracle-font text-[40px] not-italic font-normal leading-[100%] tracking-[-0.6px] mb-10"
        >How’s it going</h3>
        <SearchInput onSubmit={onSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  )
}

export default Chat
