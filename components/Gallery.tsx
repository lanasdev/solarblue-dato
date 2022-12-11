/* eslint-disable jsx-a11y/alt-text */
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Image } from 'react-datocms'

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className=" pt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group aspect-square max-w-xl cursor-pointer"
            onClick={() => {
              setSelectedImage(index)
              openModal()
            }}
          >
            <Image
              data={image.responsiveImage}
              objectFit="cover"
              layout="responsive"
              className="aspect-square h-full w-full rounded-md transition-all duration-150 ease-in-out group-hover:rounded-xl"
            />
          </div>
        ))}
      </div>

      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
        open={isOpen}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="min-h-screen px-4 text-center">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &arrow;
          </span>

          <Dialog.Panel className="my-8 inline-block w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Image
              data={images[selectedImage].responsiveImage}
              className="rounded-md "
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default Gallery
