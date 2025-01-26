//import { GalleryProps } from "@/types/gallery";

interface Scientist {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovery: string;
}

export interface GalleryProps {
    scientist: Scientist;
    size?: number;
}


function Gallery({ scientist, size = 100 }: GalleryProps ) {
	return (
		<div>
			<h1>Notable Scientists</h1>
      		<section className="profile">
        	<h2>{scientist.name}</h2>
	        <img
	          className="avatar"
	      	  src="{'https://i.imgur.com/' + scientist.imageId + 's.jpg'}"
	          alt={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
	          width={size}
	          height={size}
	        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards} </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovery}
          </li>
        </ul>
      </section>
		</div>
	);
}

export default function Profile() {
	return (
	<div>
		<Gallery
			scientist = {{ name: "Maria Skłodowska-Curie", imageId: "szV5sdG", profession: "physicist and chemist", awards:"4", discovery: "polonium (element)"}}
			size = {200} />
		<Gallery
			scientist = {{ name: "Katsuko Saruhashi", imageId: "YfeOqp2", profession: "geochemist ", awards:"2", discovery: "a method for measuring carbon dioxide in seawater"}}
			size = {200} />
	</div>
	);
}