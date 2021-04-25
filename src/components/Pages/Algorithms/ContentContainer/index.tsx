import React from 'react'
import { Header } from 'src/components/Common'
import { ITableOfContent } from 'src/utils/interface'
import Section from './Section/Section'

interface IProps {
	tableOfContent: ITableOfContent[]
}

const ContentContainer: React.FC<IProps> = ({ tableOfContent }) => {
	return (
		<div className='algorithmsPage__mainPanel'>
			<div id='algorithms'>
				<Header className='panelHeader'>Algorithms</Header>
			</div>
			<article>
				{tableOfContent.map(content => {
					return (
						<Section key={content.id} section={content}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto libero quia rerum ipsum fuga. Fugiat eveniet
							voluptatibus ex, hic ducimus nulla quisquam doloribus at commodi
							ullam fugit sunt possimus voluptatum eius provident architecto ad
							id quis consectetur nostrum nobis mollitia expedita suscipit
							numquam. Quod non ex deserunt perferendis neque laudantium maxime
							vero, mollitia a? Dolore necessitatibus veniam autem ipsa. Vel, ea
							assumenda maxime sed quaerat velit animi tempore molestiae rem
							aut, nulla mollitia laboriosam aspernatur minus est incidunt
							repellendus magnam eligendi rerum minima? Rem, suscipit?
							Consequatur doloremque laborum debitis minima tempore voluptatem
							nesciunt aperiam impedit asperiores dolorem facilis fugiat
							laboriosam rerum molestiae ratione adipisci, reprehenderit ab?
							Magnam aperiam quam natus ab officia blanditiis eius soluta
							necessitatibus ea ipsam excepturi, quibusdam nesciunt totam
							corporis error non, accusamus accusantium quos sapiente! Autem
							fuga ipsam eum culpa repudiandae ex doloribus voluptates iusto
							beatae. Ab dolores dolorem esse earum, autem quae. Delectus illum
							amet sequi porro possimus, mollitia provident atque vitae qui
							dolor a aspernatur quaerat magnam ipsam. Itaque praesentium
							repudiandae qui, dolorum commodi hic, non obcaecati
							exercitationem, consectetur doloribus ullam rerum. Quos asperiores
							sunt ad optio magni dicta qui excepturi explicabo laudantium sequi
							placeat nulla sed enim iusto nihil esse illo assumenda voluptatem
							similique rerum, tenetur ab saepe eos. Quia suscipit vel
							voluptates magnam dolorem quis aut. Esse placeat consequatur
							consectetur at, quaerat dolores molestiae porro distinctio itaque
							quo minima fugit. Suscipit iusto placeat provident molestiae odio
							sapiente at? Quis et distinctio est dignissimos dolores, harum
							voluptates voluptatum ad eaque doloribus quo deleniti recusandae
							atque ut. Enim, assumenda odit. Dolor quo saepe iure possimus,
							incidunt dolorum dolores cumque quod commodi cupiditate nesciunt
							dicta, id omnis eligendi dignissimos assumenda quibusdam vero eius
							corporis tenetur sint accusantium culpa? Reprehenderit non
							praesentium perspiciatis cupiditate! Est ad porro itaque nesciunt,
							voluptas labore neque obcaecati blanditiis nostrum officia!
							Tempore dolor modi harum consequatur laudantium nam corrupti
							molestias rerum commodi sapiente dolores, alias, officiis porro
							nemo aspernatur veniam dolorum debitis quos. Sequi autem, quo
							iusto ea perferendis minima similique, saepe repellendus itaque
							cum beatae facere necessitatibus tenetur? Maxime, quidem nesciunt
							quo repellendus suscipit fugit consectetur tempore maiores impedit
							dolorum voluptas cum saepe dignissimos laborum laboriosam? Nobis
							enim molestiae quia praesentium illo repudiandae illum voluptate
							velit itaque eum in qui, molestias tempora perspiciatis tenetur
							aliquid nemo? Beatae fugit quaerat quam, reprehenderit maiores
							reiciendis nisi in asperiores deserunt id amet vitae provident
							laborum nobis dolorum ex recusandae error sunt quisquam ipsum
							delectus. Accusantium fugit, ex officia tenetur quas quibusdam
							beatae similique corrupti quam omnis nulla repudiandae soluta
							dignissimos exercitationem impedit, recusandae asperiores cumque
							hic voluptate consequuntur? Alias, quam deleniti. Unde, tenetur
							similique. Quibusdam, mollitia ipsa vel eaque alias nesciunt ipsum
							consectetur quia. Enim quia, non adipisci, voluptatem modi dicta
							voluptas omnis, rem reiciendis totam debitis iusto tenetur!
							Distinctio similique culpa qui voluptatum voluptatem veritatis
							saepe, vel accusantium aliquid tempora enim, eius explicabo at
							quod animi eligendi amet incidunt omnis doloribus. Tempora
							deleniti minima quasi. Exercitationem doloremque nobis, ipsa
							voluptas eum dolorem commodi repellendus animi earum fuga autem,
							dignissimos voluptatum aliquid, quia nesciunt. Numquam rerum quo
							necessitatibus inventore. Ipsam a accusamus impedit aperiam
							aliquam quasi odit libero corrupti nihil illo repellat pariatur,
							fuga error tempora ipsum ea necessitatibus recusandae est iure
							sequi. Maiores, aspernatur nihil? Deserunt doloribus odit optio
							expedita, natus nobis sapiente tempora, velit qui iure explicabo
							voluptas temporibus libero culpa itaque, distinctio a nisi.
							Voluptatum soluta dolorum aliquid nesciunt recusandae quasi
							excepturi dignissimos ex aperiam officiis temporibus aspernatur
							minima ducimus quisquam vel, eius, libero tempore suscipit magnam
							commodi. Beatae quidem non facere ea necessitatibus expedita
							veniam nemo quaerat minima saepe maxime neque ducimus, perferendis
							voluptatibus ratione voluptatem doloremque voluptates dolore minus
							cumque hic facilis deleniti omnis! Incidunt aut, tenetur culpa,
							veritatis ducimus rem temporibus iure facilis sapiente illum,
							harum ipsam? Error maiores at sint cumque reprehenderit eveniet
							nulla sed! Cumque, eum! Consequatur non repudiandae unde enim,
							reprehenderit tempora ad fugiat, saepe nam asperiores numquam
							eligendi. Hic ullam blanditiis et repellat, pariatur aliquid eum
							explicabo nulla placeat sapiente. Recusandae aspernatur libero
							fugit tenetur officiis laboriosam totam a magni officia amet ad,
							doloribus dignissimos eos exercitationem repudiandae et rerum
							suscipit iure molestiae. Reiciendis sint eligendi provident
							veritatis perferendis quae mollitia eius rerum sequi quis. Ipsa
							cum exercitationem natus officia facilis, libero fugiat?
						</Section>
					)
				})}
			</article>
		</div>
	)
}

export default ContentContainer
