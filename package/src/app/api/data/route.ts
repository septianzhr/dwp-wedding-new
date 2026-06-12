import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '/#About' },
  { label: 'Team', href: '/#Team' },
  { label: 'Pertanyaan', href: '/#FAQ' },
  { label: 'Partner', href: '/#Blog' },
  { label: 'Alamat Kami', href: '/#FAQ' },
  { label: 'Galeri', href: '/gallery' },
  
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About us.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Decoration & Wedding Project adalah sebuah bidang jasa penyewaan alat pesta pernikahan dan kegiatan lain seperti acara keagamaan | Pesta Ulang Tahun | Pentas Seni | Acara Kebangsaan | dan lain sebagainya.',
    link: '',
  },
  {
    heading: 'Services.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Menyediakan berbagai kebutuhan acara mulai dari dekorasi pernikahan, tenda, sound system, lighting, panggung, hingga perlengkapan pendukung lainnya.',
    link: '',
  },
  {
    heading: 'Our Works.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Berpengalaman menangani berbagai acara pernikahan dan event di Jakarta, Bogor, Depok, Tangerang, dan Bekasi dengan hasil dekorasi yang profesional dan berkesan.',
    link: '',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'HR Manager',
    name: 'AhmadTantowi',
    imgSrc: '/images/wework/team1.png',
  },
  {
    profession: 'Marketing',
    name: 'Alwan',
    imgSrc: '/images/wework/team2.png',
  },
  {
    profession: 'Marketing',
    name: 'Dewi',
    imgSrc: '/images/wework/team3.png',
  },
  {
    profession: 'Admin',
    name: 'Widiya Ratih',
    imgSrc: '/images/wework/team4.png',
  },
  {
    profession: 'Consulting',
    name: 'Saidi',
    imgSrc: '/images/wework/team5.png',
  },
  {
    profession: 'Creative',
    name: 'Guntur',
    imgSrc: '/images/wework/team6.png',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Gedung Serbaguna HKBP Sudirman Jakarta Selatan',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Area Halaman Ciputat Tangerang Selatan',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Gedung Serbaguna HKBP Sudirman Jakarta Selatan',
    imgSrc: '/images/featured/feat5.jpg',
  },
  {
    heading: 'Area Halaman Ciputat Tangerang Selatan',
    imgSrc: '/images/featured/feat4.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Paket Hemat Tenda Only',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per paket',
    features: {
      profiles: '',
      posts: '',
      templates: '',
      view: '',
      support: '',
    },
  },
  {
    heading: 'Paket Hemat',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per paket',
    features: {
      profiles: '',
      posts: '',
      templates: '',
      view: '',
      support: '',
    },
  },
  {
    heading: 'Paket Hemat',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per paket',
    features: {
      profiles: '',
      posts: '',
      templates: '',
      view: '',
      support: '',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Bapak Andi - Jakarta Selatan',
    profession: '',
    comment:
      'Dekorasi pernikahan sangat memuaskan, hasilnya sesuai harapan dan tim bekerja dengan profesional. Terima kasih Decoration & Wedding Project.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Ibu Sari - Bogor',
    profession: '',
    comment:
      'Pelayanan ramah, harga terjangkau, dan dekorasi sangat indah. Acara berjalan lancar dan keluarga sangat puas.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Bapak Rizki - Tangerang',
    profession: '',
    comment:
      'Tim sangat responsif dan membantu dari awal hingga acara selesai. Hasil dekorasi melebihi ekspektasi kami.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Bapak Andi Pratama',
    profession: '',
    comment:
      'Dekorasi yang dibuat sangat indah dan sesuai dengan konsep yang kami inginkan. Tim bekerja profesional, tepat waktu, dan sangat membantu selama acara berlangsung.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Ibu Sari Rahmawati',
    profession: '',
    comment:
      'Kami sangat puas dengan pelayanan Decoration & Wedding Project. Hasil dekorasi melebihi ekspektasi dan membuat momen pernikahan kami semakin berkesan.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Bapak Rizki & Keluarga',
    profession: '',
    comment:
      'Mulai dari konsultasi hingga hari acara, semuanya berjalan lancar. Harga terjangkau dengan kualitas dekorasi yang sangat baik. Sangat direkomendasikan.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: 'Info',
    heading: 'Core Values',
    heading2: 'Pelayanan Terbaik',
    date: '2026',
    name: 'Kami akan selalu memberikan pelayanan terbaik dengan segenap hati untuk menciptakan nuansa pesta yang meriah dengan harga yang terjangkau.',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: 'Info',
    heading: 'Partners',
    heading2: 'Partner Profesional',
    date: '2026',
    name: 'Studio 88 - Poltangan Pasar Minggu sebagai partner foto dan videographer. Seza MUA Bogor sebagai partner make up artist dan gaun.',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: 'Info',
    heading: 'Distribution Channel',
    heading2: 'Media Sosial',
    date: '2026',
    name: 'Segala kegiatan yang pernah kami tangani akan kami upload di Facebook, Instagram, TikTok, dan YouTube.',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'Tentang Kami', href: '#About' },
      { label: 'Team', href: '#Team' },
      { label: 'Pertanyaan', href: '#FAQ' },
      { label: 'Partner', href: '#Blog' },
    ],
  },
  {
    section: 'Category',
    links: [
      { label: 'Dekorasi Pernikahan', href: '/' },
      { label: 'Tenda Acara', href: '/' },
      { label: 'Sound System', href: '/' },
      { label: 'Lighting', href: '/' },
    ],
  },
  {
    section: 'Pages',
    links: [
      { label: 'Galeri Proyek', href: '/' },
      { label: 'Partner Kami', href: '/' },
      { label: 'Area Layanan', href: '/' },
    ],
  },
  {
    section: 'Others',
    links: [
      { label: 'WhatsApp', href: '/' },
      { label: 'Instagram', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
