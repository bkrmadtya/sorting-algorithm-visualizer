import React from 'react'

//components
import { Header } from 'src/components/Common'
import Dropdown from 'src/components/Common/Dropdown'

const algorithmsOptions = [
	{
		key: 'Quick Sort',
		value: 'quickSort'
	},
	{
		key: 'Bubble Sort',
		value: 'bubbleSort'
	},
	{
		key: 'Merge Sort',
		value: 'mergeSort'
	}
]
const SidePanel: React.FC = () => {
	return (
		<div className='sidePanel'>
			<Header className='panelHeader'>
				<span>Algorithm: </span>
				<Dropdown options={algorithmsOptions} />
			</Header>
			<div className='codeContainer'>
				<code>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et vitae
					quam molestiae. Maxime, cum? Recusandae, laudantium nesciunt nostrum,
					dolorum voluptate, accusamus odio repellat quasi quod fugiat maxime
					aut architecto. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Laboriosam nisi eius temporibus dignissimos animi in ipsum
					molestias atque ea unde, laborum laudantium? Aspernatur pariatur
					aliquam voluptates magni neque! Aperiam quia esse est sunt illo nulla
					a velit natus beatae modi dolor, tempora consequatur, vitae amet
					adipisci, voluptates accusamus magni officiis quod. Asperiores fugit
					praesentium in sapiente nulla quis dicta, aliquid soluta provident,
					cumque tempora earum suscipit quasi necessitatibus. Accusamus
					perspiciatis, minima suscipit, illo sed laboriosam quas vitae rerum
					quia in molestias et nobis natus fuga unde minus magnam vel deserunt
					consequatur? Exercitationem, at nobis quos aliquid maxime quod ipsam
					adipisci, illo sunt illum cupiditate nisi, amet quam fuga deleniti
					dicta architecto ipsa minima ea ut veritatis tempora iure. Cumque,
					autem. Labore rerum voluptatibus autem cupiditate, eos pariatur
					distinctio a, veniam, sint consequatur at quam necessitatibus velit
					iste voluptatum quia ipsam fuga voluptate quibusdam omnis quasi. Ut
					mollitia quia provident quis inventore et sint hic repudiandae
					adipisci perferendis explicabo eveniet, reprehenderit suscipit
					veritatis officia reiciendis ipsum rerum libero sequi quasi non
					tenetur iusto! Adipisci exercitationem aliquam qui quas eveniet id
					officia commodi dolorum tempora consequatur quia, inventore illum
					eligendi. Nemo architecto sunt suscipit laudantium natus ut nulla
					excepturi, nostrum possimus dicta pariatur deserunt, temporibus fugit
					molestias impedit veritatis aut vero sint. Nobis debitis id deserunt
					illo molestiae veritatis adipisci molestias vitae perferendis veniam
					placeat voluptatum doloribus numquam asperiores nostrum laborum sequi,
					quae ab ipsam? Adipisci quaerat cum in inventore optio nihil a,
					repellat fuga nostrum maiores ex saepe atque debitis et nisi, animi
					cupiditate ratione, consectetur ea laborum. Esse, dicta. Saepe modi
					optio aspernatur provident quo eaque nostrum deleniti quos, molestias
					totam iusto. Aut harum consectetur sed in recusandae porro hic?
					Quaerat, porro consectetur repellat nostrum provident consequuntur,
					vitae voluptates natus voluptatem quisquam esse suscipit doloribus
					neque delectus molestias. Officiis quisquam, est quis ea ducimus
					fugiat atque eos itaque in ipsam dolores veniam vitae ex repellendus
					tenetur, quam, dolorem sit dignissimos assumenda? Est odio animi
					dignissimos harum similique omnis eveniet dolore perspiciatis adipisci
					amet excepturi exercitationem, officia labore quam sint magnam esse
					eligendi, aut corporis vero odit quas unde porro corrupti. Laudantium
					officiis quos exercitationem consequuntur reiciendis, fugiat
					blanditiis veritatis maxime cupiditate, repudiandae eaque magnam iure
					vel voluptatem, enim libero possimus nostrum. Incidunt harum ratione
					facere, tenetur iusto rerum inventore atque doloribus laboriosam
					laudantium consequuntur, id ipsa excepturi repellendus recusandae ab
					nesciunt, tempora blanditiis reiciendis. Quis a ipsum distinctio iusto
					itaque hic optio enim pariatur! Temporibus nihil sequi non
					exercitationem architecto velit et nobis incidunt cupiditate facere
					distinctio, veniam doloribus pariatur, voluptate eius sunt possimus
					assumenda eligendi quia autem! At quia maxime voluptas! Rerum natus ea
					cupiditate quas laudantium possimus corporis maiores vel minima,
					suscipit dolorum officia a, facere modi debitis exercitationem aliquid
					porro fugit quidem similique asperiores temporibus sunt eius
					obcaecati. Nostrum porro tempore dolorem at reiciendis fuga? Aperiam
					saepe magni officiis nihil sequi ipsa fugit voluptatum repudiandae,
					corrupti illum provident deserunt eligendi vel assumenda, veritatis
					aut fugiat odit, qui commodi hic. Quae provident, iure rem ipsam, unde
					ducimus alias, laboriosam delectus earum sapiente odio. Quas inventore
					sit architecto fuga velit totam beatae. Soluta error id nostrum
					recusandae minima necessitatibus neque quod veritatis velit, quos
					eaque amet, quisquam, odio nam nesciunt aliquid voluptas libero ipsa
					officiis. Quibusdam animi odio cupiditate eveniet maxime maiores
					veritatis quia, nisi velit ratione perspiciatis necessitatibus dolorum
					alias inventore harum error consequuntur molestias! Autem enim quos
					assumenda alias ea ex dolor nemo commodi provident hic distinctio
					cupiditate veniam, corporis eos eligendi amet laboriosam consectetur
					perferendis doloremque, quisquam vitae voluptas eveniet. Quae, rem
					consectetur! In possimus officia eveniet tempore commodi sit deleniti
					ullam ab quo! Voluptatum temporibus corporis quidem cum, officiis
					porro molestias! Laboriosam amet placeat assumenda iusto, iure
					laudantium consequuntur minima eos? Ullam et est necessitatibus
					eveniet ducimus consectetur provident obcaecati asperiores? Aliquid
					consequatur necessitatibus dicta, laborum quis, assumenda atque
					exercitationem ex magnam beatae et. Illum voluptatum dolores
					doloribus! Recusandae eius similique soluta harum ut adipisci labore
					rerum iure voluptate at expedita assumenda ratione tenetur pariatur
					quia, iusto dicta in necessitatibus perferendis amet numquam aperiam
					repellendus! Pariatur deleniti quis quidem explicabo, harum recusandae
					officia fuga reprehenderit, doloremque architecto quaerat eligendi
					incidunt fugit culpa. Nulla, adipisci accusantium suscipit deleniti
					fugit, sit fuga porro temporibus dolore aspernatur excepturi.
				</code>
			</div>
		</div>
	)
}

export default SidePanel
