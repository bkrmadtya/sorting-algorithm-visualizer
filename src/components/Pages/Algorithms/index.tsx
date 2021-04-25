import React, { useEffect, useState } from 'react'
import { Header } from 'src/components/Common'

interface ITab {
	href: string
	name: string
}

const tabs: ITab[] = [
	{ href: '#definition', name: 'Definition' },
	{ href: '#measurement', name: 'Measurement and Efficiency' },
	{ href: '#big-o-notation', name: 'Big(O) notation' },
	{ href: '#bubble-sort', name: 'Bubble Sort' },
	{ href: '#merge-sort', name: 'Merge Sort' },
	{ href: '#quick-sort', name: 'Quick Sort' }
]

const Algorithms: React.FC = () => {
	const [selected, setSelected] = useState('algorithms')

	const handleTabSelection = (name: string) => setSelected(name)

	return (
		<div className='algorithmsPage'>
			<div className='algorithmsPage__sidePanel'>
				<a href='#algorithms'>
					<Header className='panelHeader'>Table of content</Header>
				</a>
				{tabs.map(({ href, name }) => (
					<Tab
						key={href}
						href={href}
						name={name}
						isSelected={selected === name}
						onClick={() => handleTabSelection(name)}
					/>
				))}
			</div>
			<div className='algorithmsPage__mainPanel'>
				<div id='algorithms'>
					<Header className='panelHeader'>Algorithms</Header>
				</div>
				<article>
					<section id='definition' className='content'>
						<Header className='content__header'>Definition</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
					<section id='measurement' className='content'>
						<Header className='content__header'>Measurement</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
					<section id='big-o-notation' className='content'>
						<Header className='content__header'>Big(O) notation</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
					<section id='bubble-sort' className='content'>
						<Header className='content__header'>Bubble Sort</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
					<section id='merge-sort' className='content'>
						<Header className='content__header'>Merge Sort</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
					<section id='quick-sort' className='content'>
						<Header className='content__header'>Quick Sort</Header>
						<div className='content__detail'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
							assumenda, modi saepe eos itaque alias impedit, laudantium ab
							repudiandae id reprehenderit. Quia amet molestias provident
							corrupti, impedit neque quaerat magnam nobis ad hic enim facilis
							perspiciatis quod recusandae obcaecati natus et est eos
							exercitationem! Atque rerum assumenda sunt veniam similique
							consequuntur, explicabo illo labore accusantium, excepturi
							perspiciatis aliquam iusto aut hic sequi! Voluptatibus, quasi eos
							id nisi adipisci temporibus asperiores impedit ab dicta tempora,
							amet, natus perspiciatis sunt officiis ducimus pariatur aut
							corporis explicabo non nostrum nobis. Magnam id accusamus modi.
							Vel laboriosam incidunt pariatur minus dicta! Et quod omnis id
							molestiae commodi similique eaque voluptatem, ex repellat soluta
							esse accusantium animi voluptas. Ratione amet ducimus omnis
							adipisci voluptates itaque ad iusto minus, culpa sequi ipsam
							aliquid laboriosam velit cumque dolore nobis ea placeat doloribus
							assumenda dolorum labore! Odit perspiciatis nostrum similique
							alias doloribus facilis minus laborum magni iste dolore maxime
							optio, nisi totam. Et hic officia maxime iste culpa quas dolorem
							voluptatum est! Sit pariatur odio dolorem voluptatem minima, optio
							dolore cupiditate doloribus, aut reprehenderit cum, aliquid
							ratione excepturi amet harum sed nulla repudiandae sequi error
							atque veniam maxime. Tempora similique maiores quaerat neque a
							labore aut architecto perspiciatis officiis blanditiis autem,
							voluptatum dignissimos nulla dolorum, libero numquam veritatis
							dolorem pariatur corrupti quos est? Doloribus eaque consectetur
							odit corrupti doloremque molestias et, nobis excepturi dignissimos
							dicta odio illum aperiam maiores porro nesciunt! Recusandae
							eligendi, cum ratione praesentium mollitia beatae ab atque, odio
							ullam blanditiis alias autem dolore laboriosam eum? Rem sequi
							tempora saepe harum consectetur cupiditate, officia quas accusamus
							assumenda reprehenderit corporis labore, fugiat autem repellat sit
							quia similique! Pariatur eius dignissimos labore laudantium
							distinctio explicabo. Inventore quod debitis necessitatibus
							ratione illo et aspernatur! Adipisci illum, nesciunt eos magni
							doloremque similique et repellendus sequi itaque enim. Quia
							accusantium enim, qui ullam beatae dolore! Corrupti, itaque.
							Necessitatibus ab at deserunt laudantium expedita, eos cumque
							similique. At consequatur tempore facere quasi aperiam, reiciendis
							quidem eligendi voluptatum ad asperiores reprehenderit cupiditate
							odio minima earum officia recusandae error iusto laboriosam quae
							id facilis. Atque quis dolorum, totam sunt laudantium obcaecati
							ab! Blanditiis ducimus aut voluptatem saepe ipsam quae illo nam
							eveniet. Nostrum magni enim exercitationem dignissimos nihil
							aspernatur ratione eveniet ex fugiat vitae beatae minima
							doloremque, velit totam quod. Natus, sapiente exercitationem ut
							delectus totam atque? Qui veritatis dolor impedit optio possimus
							eveniet quam delectus aliquam beatae? Quas amet laborum beatae
							similique facere velit ad quidem eveniet nihil. Id, quasi
							voluptatum sed sunt, rem eum, debitis perferendis dolorem vitae
							temporibus vel iusto? Alias molestiae odio reprehenderit
							dignissimos aut ipsa deleniti quis sit libero accusamus, nisi
							dolorem eveniet. Nam, beatae assumenda quas veniam rerum ipsam
							dicta necessitatibus deleniti labore, facere veritatis recusandae
							id tempora. Voluptate aliquam ut laborum nesciunt repudiandae
							dolore aut quisquam provident, qui beatae nemo, nihil alias,
							placeat corrupti excepturi dolores consequatur totam. Inventore
							quae molestias quia quod alias asperiores magni perspiciatis!
							Sapiente quisquam autem necessitatibus facilis, sed dicta corrupti
							numquam inventore ut quaerat quos soluta, modi architecto commodi
							aut ducimus voluptatibus, non voluptatem accusamus nam incidunt
							provident! Neque officia nostrum, debitis inventore totam dolorem
							corrupti eveniet, consequatur, repellat suscipit ea veritatis
							obcaecati quibusdam distinctio sapiente voluptatum molestiae omnis
							asperiores sint deserunt odio? Id asperiores iusto, tenetur
							facilis pariatur aliquam ipsa eligendi magni, vel, reprehenderit
							provident enim. Nesciunt tempora et at facere dolor ipsam,
							voluptas ad, eum perspiciatis architecto vero iure quaerat
							distinctio molestias ipsa dolorem modi, repudiandae error
							dignissimos sint eius? Veniam ipsa optio ea doloribus quasi
							molestiae voluptatem ex impedit quis assumenda, quaerat et
							corporis debitis nesciunt consequatur sed! Tempora obcaecati
							dolores quae, est dignissimos hic nobis reiciendis expedita
							recusandae, inventore explicabo corrupti possimus minima? Suscipit
							perferendis ad velit quaerat nesciunt exercitationem aliquam
							dignissimos necessitatibus laudantium vel incidunt unde enim
							obcaecati quisquam, voluptate, id sequi voluptatem! Modi libero,
							nesciunt mollitia explicabo accusantium corrupti, asperiores culpa
							fugiat sapiente atque ducimus excepturi quia voluptatibus rerum
							dicta omnis unde cum necessitatibus! Excepturi vitae rem,
							repellendus iste, ea voluptatem rerum libero laborum neque
							suscipit in. Quidem quisquam accusamus at autem cumque qui quasi
							est consectetur dicta sunt, explicabo temporibus culpa cupiditate
							pariatur officiis exercitationem cum officia! Amet enim quas earum
							voluptatem recusandae quae temporibus sint soluta. Ullam quae,
							odio molestias quos iure facilis blanditiis!
						</div>
					</section>
				</article>
			</div>
		</div>
	)
}

export default Algorithms

interface IProps {
	href: string
	name: string
	isSelected: boolean
	onClick: () => any
}

const Tab: React.FC<IProps> = ({ href, name, isSelected, onClick }) => {
	console.log(isSelected)
	return (
		<a href={href}>
			<div
				className={`contentLink ${isSelected ? 'selectedTab' : ''}`}
				onClick={onClick}
			>
				{name}
			</div>
		</a>
	)
}
