import Image from 'next/image'

const images = Array.from(
  { length: 48 },
  (_, i) => `/images/gallery/${i + 1}.jpg`
)

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">
        Galeri Dekorasi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}