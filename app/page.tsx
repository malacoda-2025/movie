import Image from 'next/image';
import {Play, Users, Camera, Film, ImageIcon, Clapperboard} from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-red-500 font-bodoni">MALACODA</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#synopsis" className="hover:text-red-400 transition-colors">Synopsis</a>
                                <a href="#cast" className="hover:text-red-400 transition-colors">Cast & Crew</a>
                                <a href="#media" className="hover:text-red-400 transition-colors">Media</a>
                                <a href="#gallery" className="hover:text-red-400 transition-colors">Gallery</a>
                                {/*<a href="#feature" className="hover:text-red-400 transition-colors">Feature</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>

                {/* Placeholder for hero background image */}
                <div className="absolute inset-0 bg-gray-900">
                    <div className="w-full h-full flex items-center justify-center text-gray-600"
                         style={{
                             backgroundImage: `url("masthead/masthead1.png")`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>
                        {/*}
                        <div className="text-center">
                            <Film className="w-24 h-24 mx-auto mb-4 opacity-30"/>
                            <p className="text-sm">Hero Background Image</p>
                        </div>*/}
                    </div>
                </div>

                <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-red-500 font-bodoni">
                        MALACODA
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                        A film about finding yourself in the darkness.
                    </p>
                    {/*}
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center mx-auto">
                        <Play className="w-5 h-5 mr-2"/>
                        Watch Trailer
                    </button>*/}
                </div>
            </section>

            {/* Synopsis Section */}
            <section id="synopsis" className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-red-500 font-bodoni">Synopsis</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                A sleepless Puerto Rican college student is stalked by a demon from Dante’s
                                Inferno—one that knows him better than he knows himself.
                            </p>
                        </div>
                        <div className="relative">
                            {/* Placeholder for official poster */}
                            <div className="aspect-[2/3] bg-gray-800 rounded-lg flex items-center justify-center"
                                 style={{
                                     backgroundImage: `url("poster/webposter.png")`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center'
                                 }}>{/*
                                <div className="text-center text-gray-500">
                                    <ImageIcon className="w-16 h-16 mx-auto mb-4"/>
                                    <p>Official Poster</p>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cast & Crew Section */}
            <section id="cast" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-red-500 font-bodoni">Cast & Crew</h2>

                    {/* Cast */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <Users className="w-6 h-6 mr-3 text-red-400"/>
                            Cast
                        </h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("cast/jonathan.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Users className="w-12 h-12" />
                  </div>
                  */}
                                </div>
                                <h4 className="font-semibold text-lg">Jonathan Moreno</h4>
                                <p className="text-gray-400">Gabriel</p>
                                <p className="text-sm text-gray-500 mt-2">Bio placeholder text goes here...</p>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("cast/q.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Users className="w-12 h-12" />
                  </div>
                  */}
                                </div>
                                <h4 className="font-semibold text-lg">Q Williams</h4>
                                <p className="text-gray-400">Lily</p>
                                <p className="text-sm text-gray-500 mt-2">Bio placeholder text goes here...</p>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("cast/leddy.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>

                                    {/*
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Users className="w-12 h-12" />
                  </div>*/}
                                </div>
                                <h4 className="font-semibold text-lg">Leddy Stroud</h4>
                                <p className="text-gray-400">Seth</p>
                                <p className="text-sm text-gray-500 mt-2">Bio placeholder text goes here...</p>
                            </div>
                        </div>
                    </div>

                    {/* Crew */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <Clapperboard className="w-6 h-6 mr-3 text-red-400"/>
                            Crew
                        </h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("crew/g.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <Camera className="w-12 h-12"/>
                                    </div>
                                    */}
                                </div>
                                <h4 className="font-semibold text-lg">Guillermo Rodriguez</h4>
                                <p className="text-gray-400">Writer, Director, Editor</p>
                                <p className="text-sm text-gray-500 mt-2">Guillermo R. Rodríguez is a writer, director,
                                    editor and producer from San Juan, Puerto
                                    Rico. Guillermo is also Assistant Professor of Cinema and Television Arts at
                                    California State
                                    University, Northridge. He is the author of the book Spanish Meta-Art and
                                    Contemporary
                                    Cinema: Mirrors to the Unconscious (Bloomsbury, 2023). His directorial debut The
                                    Shadows premiered at Los Angeles's Outfest LGBTA Film Festival in their Dramatic
                                    Competition and is currently available on Amazon Prime.</p>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("crew/scott.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <Camera className="w-12 h-12"/>
                                    </div>
                                    */}
                                </div>
                                <h4 className="font-semibold text-lg">Scott Langer</h4>
                                <p className="text-gray-400">Producer</p>
                                <p className="text-sm text-gray-500 mt-2">Scott Langer is the founder of Ninety 90
                                    Pictures. A graduate of the University of Colorado-Boulder with a B.A. in Film
                                    Studies, he also trained in Method Acting at the Lee Strasberg Institute in New
                                    York. After overcoming years of addiction with the support of fellow artists and
                                    family, Scott turned to creating art as a way to sustain his sobriety. His plays
                                    Amanda the Barbarian and Thank You For Loving Me premiered at the Hollywood Fringe
                                    Festival, with the latter winning the Producers’ Encore Award. Inspired while
                                    working on the short film Stay Calm in 2019, Scott founded Ninety 90 Pictures to
                                    create safe, collaborative sets that support artists at every stage of recovery.</p>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("crew/erik.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <Camera className="w-12 h-12"/>
                                    </div>
                                    */}
                                </div>
                                <h4 className="font-semibold text-lg">Erik Boccio</h4>
                                <p className="text-gray-400">Director of Photography</p>
                                <p className="text-sm text-gray-500 mt-2">Erik Boccio is a multi-award-winning filmmaker
                                    based in Southern California. His work spans feature films, shorts, music videos,
                                    and VR projects, with millions of views across streaming, television, and web
                                    platforms. Boccio’s feature debut, Night of the Bastard, premiered at Arrow Video
                                    FrightFest and Sitges, later securing distribution through MPI Media, Dark Sky
                                    Films, and Shudder. His acclaimed horror-comedy short Brutal Realty, Inc. earned
                                    multiple festival awards before premiering on Screambox TV in 2025. Beginning his
                                    career in New York directing music videos for MTV, FUSE, and BET, Boccio has since
                                    built a diverse body of work while also serving as an Associate Professor of Cinema
                                    & Television Arts at California State University, Northridge.</p>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform"
                                    style={{
                                        backgroundImage: `url("crew/martin.png")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                    {/*
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <Camera className="w-12 h-12"/>
                                    </div>
                                    */}
                                </div>
                                <h4 className="font-semibold text-lg">Martin Jarmick</h4>
                                <p className="text-gray-400">Virtual Art Director</p>
                                <p className="text-sm text-gray-500 mt-2">Martin Jarmick is a digital artist, developer,
                                    and professor at California State University, Northridge. Raised in Seattle and San
                                    Francisco, he earned his PhD in Digital Art and Experimental Media from the
                                    University of Washington. His work blends cinema, poetry, and technology, often
                                    exploring themes of mental health, transformation, and the fragility of reality.
                                    Collaborating across disciplines—from choreographers and musicians to engineers and
                                    game designers—Jarmick creates immersive, interactive media that expand narrative
                                    patterns and invite audiences into intimate, performative experiences.</p>
                            </div>
                            {/*}
              <div className="text-center group">
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Camera className="w-12 h-12" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg">Crew Member</h4>
                <p className="text-gray-400">Role</p>
                <p className="text-sm text-gray-500 mt-2">Bio placeholder text goes here...</p>
              </div>
              */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section - Clips */}
            <section id="media" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-red-500 font-bodoni">Clips from the
                        Film</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div
                                    className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        <div className="text-center">
                                            <Play className="w-16 h-16 mx-auto mb-2"/>
                                            <p>Clip {i}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Play className="w-12 h-12 text-white"/>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mt-4">Scene Title {i}</h3>
                                <p className="text-gray-400 text-sm">Brief description of the clip...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center text-red-500 font-bodoni">Gallery</h2>

                    {/* HQ Stills */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <ImageIcon className="w-6 h-6 mr-3 text-red-400"/>
                            Stills
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    id: 1,
                                    src: '1.png'
                                },
                                {
                                    id: 2,
                                    src: '2.png'
                                },
                                {
                                    id: 3,
                                    src: '3.png'
                                },
                                {
                                    id: 4,
                                    src: '4.png'
                                },
                                {
                                    id: 5,
                                    src: '5.png'
                                },
                                {
                                    id: 6,
                                    src: '6.png'
                                }].map((i) => (
                                <div key={i.id} className="group">
                                    <div
                                        className="aspect-video bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform"
                                        style={{
                                            backgroundImage: `url("stills/${i.src}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        {/*<div className="w-full h-full flex items-center justify-center text-gray-500">
                                            <div className="text-center">
                                                <ImageIcon className="w-12 h-12 mx-auto mb-2"/>
                                                <p className="text-sm">Still {i}</p>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BTS Photos */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <Camera className="w-6 h-6 mr-3 text-red-400"/>
                            Behind the Scenes
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[{id: 1, src: 'PXL_20250730_163119709_Original.jpg'}, {
                                id: 2,
                                src: 'PXL_20250730_165146438.MP.jpg'
                            },
                                {id: 3, src: 'PXL_20250730_173846718.MP_Original.jpg'},
                                {
                                id: 4,
                                src: '707519450007310104.jpg'
                            },
                                {
                                    id: 5,
                                    src: '5390112859903086138.jpg'
                                },
                            {
                                id: 6,
                                src: 'IMG_1115.jpg'
                            },
                                {id: 7, src: 'PXL_20250731_222247478_Original.jpg'},
                            {
                                id: 8,
                                src: '3418804458213328473.jpg'
                            }].map((i) => (
                                <div key={i.id} className="group">
                                    <div
                                        className="aspect-square rounded-lg overflow-hidden group-hover:scale-105 transition-transform"
                                        style={{
                                            backgroundImage: `url("bts/${i.src}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {/*
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs">BTS {i.id}</p>
                      </div>
                    </div>**/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            {/*}
      <section id="feature" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-red-500 font-bodoni">Feature</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When college student Alex begins experiencing severe insomnia, what starts as academic stress 
                slowly reveals itself to be something much deeper. As sleepless nights blur into restless days, 
                Alex is forced to confront the truth he's been running from—a truth about his identity that 
                he hasn't even admitted to himself.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Set against the backdrop of late-night campus life and the isolation of academic pressure, 
                "Malacoda" explores the psychological toll of denial and the courage it takes to face 
                one's authentic self. Sometimes the most frightening journey is the one that leads within.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4" />
                  <p>Official Poster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-red-500 mb-4 font-bodoni">MALACODA</h3>
                        <p className="text-gray-400 mb-6">A film about finding yourself in the darkness</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Screenings</a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <p className="text-gray-500 text-sm">© 2025 Guillermo Rodriguez. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}